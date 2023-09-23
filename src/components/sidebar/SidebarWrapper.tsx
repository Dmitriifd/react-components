import Sidebar, { SidebarItem } from '@components/sidebar/Sidebar'
import { BarChart, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings } from 'lucide-react'

const SidebarWrapper = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert />
        <SidebarItem icon={<BarChart size={20} />} text="Users" alert />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" alert />
        <SidebarItem icon={<Package size={20} />} text="Orders" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" alert />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" alert />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" alert />
      </Sidebar>
    </div>
  )
}

export { SidebarWrapper }
