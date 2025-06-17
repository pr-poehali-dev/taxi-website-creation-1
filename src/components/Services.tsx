import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр транспортных услуг для жителей Курской
            области
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-blue-600" />
              </div>
              <CardTitle>Междугородние перевозки</CardTitle>
              <CardDescription>
                Комфортабельная перевозка пассажиров между городами Курской
                области
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Современные автомобили</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Опытные водители</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Фиксированные тарифы</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Package" size={24} className="text-green-600" />
              </div>
              <CardTitle>Доставка продуктов</CardTitle>
              <CardDescription>
                Быстрая и бережная доставка продуктов в приграничные территории
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Соблюдение температурного режима</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Доставка в день заказа</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Отслеживание груза</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
