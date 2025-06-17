import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">КурскТакси</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} />
            Заказать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
