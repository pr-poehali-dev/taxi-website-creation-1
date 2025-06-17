import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Междугородние пассажирские перевозки по всей территории РФ
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Осуществляем междугородние пассажирские перевозки по всей территории
            РФ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={20} />
              Заказать поездку
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Package" size={20} />
              Доставка продуктов
            </Button>
          </div>

          <div className="flex items-center justify-center mt-12 space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>Работаем 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} />
              <span>Лицензированы</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={20} />
              <span>Вся область</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
