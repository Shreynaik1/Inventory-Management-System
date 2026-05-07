import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];
  return (
    <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10 shadow-2xl">
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-900/50">
            <Package className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">StockMaster</span>
        </div>
      </div>

      <nav className="space-y-1">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-3">
          Management
        </div>
        {navigation.map((item, key) => {
          const IconComponent = item.icon;
          const isActive = currentPath === item.href;
          return (
            <Link
              href={item.href}
              key={key}
              className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                  : "hover:bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <UserButton showUserInfo />
        </div>
      </div>
    </div>
  );
}
