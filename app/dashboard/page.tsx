import ProductsChart from "@/components/products-chart";
import Sidebar from "@/components/sidebar";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const userId = user.id;

  const [totalProducts, lowStock, allProducts] = await Promise.all([
    prisma.product.count({ where: { userId } }),
    prisma.product.count({
      where: {
        userId,
        lowStockAt: { not: null },
        quantity: { lte: 5 },
      },
    }),
    prisma.product.findMany({
      where: { userId },
      select: { price: true, quantity: true, createdAt: true },
    }),
  ]);

  const totalValue = allProducts.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.quantity),
    0
  );

  const inStockCount = allProducts.filter((p) => Number(p.quantity) > 5).length;
  const lowStockCount = allProducts.filter(
    (p) => Number(p.quantity) <= 5 && Number(p.quantity) >= 1
  ).length;
  const outOfStockCount = allProducts.filter(
    (p) => Number(p.quantity) === 0
  ).length;

  const inStockPercentage =
    totalProducts > 0 ? Math.round((inStockCount / totalProducts) * 100) : 0;
  const lowStockPercentage =
    totalProducts > 0 ? Math.round((lowStockCount / totalProducts) * 100) : 0;
  const outOfStockPercentage =
    totalProducts > 0 ? Math.round((outOfStockCount / totalProducts) * 100) : 0;

  const now = new Date();
  const weeklyProductsData = [];

  for (let i = 11; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - i * 7);
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekStart.setHours(23, 59, 59, 999);

    const weekLabel = `${String(weekStart.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(weekStart.getDate() + 1).padStart(2, "0")}`;

    const weekProducts = allProducts.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= weekStart && productDate <= weekEnd;
    });

    weeklyProductsData.push({
      week: weekLabel,
      products: weekProducts.length,
    });
  }

  const recent = await prisma.product.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  console.log(totalValue);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back! Here is an overview of your inventory.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Key Metrics */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
              Key Performance Metrics
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="group">
                <div className="text-sm font-medium text-gray-500 mb-1 group-hover:text-purple-600 transition-colors">Total Products</div>
                <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
                  {totalProducts}
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex items-center px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-bold">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Stable
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="text-sm font-medium text-gray-500 mb-1 group-hover:text-purple-600 transition-colors">Total Value</div>
                <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
                  ${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                    USD
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="text-sm font-medium text-gray-500 mb-1 group-hover:text-purple-600 transition-colors">Low Stock</div>
                <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
                  {lowStock}
                </div>
                <div className="flex items-center mt-2">
                  {lowStock > 0 ? (
                    <div className="flex items-center px-2 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-bold animate-pulse">
                      Action Needed
                    </div>
                  ) : (
                    <div className="flex items-center px-2 py-0.5 rounded-full bg-gray-50 text-gray-600 text-xs font-bold">
                      All Good
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Iventory over time */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-gray-900">Inventory Growth</h2>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last 12 Weeks</span>
            </div>
            <div className="h-52">
              <ProductsChart data={weeklyProductsData} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Stock Levels */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-gray-900">Recent Updates</h2>
              <Link href="/inventory" className="text-sm font-bold text-purple-600 hover:text-purple-700">View All</Link>
            </div>
            <div className="space-y-4">
              {recent.map((product, key) => {
                const stockLevel =
                  product.quantity === 0
                    ? 0
                    : product.quantity <= (product.lowStockAt || 5)
                    ? 1
                    : 2;

                const bgColors = [
                  "bg-red-500",
                  "bg-amber-500",
                  "bg-emerald-500",
                ];
                const textColors = [
                  "text-red-700 bg-red-50",
                  "text-amber-700 bg-amber-50",
                  "text-emerald-700 bg-emerald-50",
                ];
                const labels = ["Out of Stock", "Low Stock", "In Stock"];
                
                return (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ring-4 ring-white ${bgColors[stockLevel]}`}
                      />
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-500">SKU: {product.sku || "N/A"}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-bold px-2.5 py-1 rounded-full ${textColors[stockLevel]}`}>
                        {product.quantity} Units
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Efficiency */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-gray-900">Inventory Health</h2>
            </div>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-gray-100"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={552.92}
                    strokeDashoffset={552.92 - (552.92 * inStockPercentage) / 100}
                    strokeLinecap="round"
                    className="text-purple-600 transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-900">
                      {inStockPercentage}%
                    </div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Healthy</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-xl bg-purple-50">
                <div className="text-sm font-bold text-purple-700">{inStockPercentage}%</div>
                <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Available</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-amber-50">
                <div className="text-sm font-bold text-amber-700">{lowStockPercentage}%</div>
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Low</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-gray-50">
                <div className="text-sm font-bold text-gray-700">{outOfStockPercentage}%</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Empty</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
