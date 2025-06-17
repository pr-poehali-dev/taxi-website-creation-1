import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами для заказа поездки или доставки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-blue-600" />
              </div>
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                +7 (4712) XXX-XXX
              </p>
              <p className="text-gray-600">Работаем круглосуточно</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="text-green-600"
                />
              </div>
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                +7 (XXX) XXX-XXXX
              </p>
              <p className="text-gray-600">Быстрые ответы</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-purple-600" />
              </div>
              <CardTitle>Адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-gray-900">г. Курск</p>
              <p className="text-gray-600">Курская область</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={20} />
            Заказать сейчас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
