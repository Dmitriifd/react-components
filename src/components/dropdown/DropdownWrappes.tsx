import Button from '@components/button/Button'
import Dropdown, { DropdownItem } from '@components/dropdown/Dropdown'
import { ShoppingCart, Package, Settings, LogOut } from 'react-feather'

const DropdownWrappes = () => {
  return (
    <div className="h-screen bg-gray-50">
      <nav className="flex items-start justify-end px-4 py-2 border-b">
        <Dropdown trigger={<Button>Menu</Button>}>
          <DropdownItem>
            <img
              src="https://avatars.dicebear.com/api/initials/JS.svg"
              alt="user avatar"
              className="w-12 rounded-full"
            />
            <div className="py-2">
              <p className="font-medium">John Doe</p>
              <a href="" className="text-sm font-medium text-gray-500">
                johndoe@gmail.com
              </a>
            </div>
          </DropdownItem>
          <DropdownItem>
            <ShoppingCart size={20} /> Cart
          </DropdownItem>
          <DropdownItem>
            <Package size={20} /> Orders
          </DropdownItem>
          <DropdownItem>
            <Settings size={20} /> Preferences
          </DropdownItem>
          <DropdownItem>
            <LogOut size={20} /> Logout
          </DropdownItem>
        </Dropdown>
      </nav>
    </div>
  )
}

export { DropdownWrappes }
