import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function CostCalculator() {
  const [distance, setDistance] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [timeOfDay, setTimeOfDay] = useState<string>('day');
  const [cost, setCost] = useState<number | null>(null);

  const basePrices = {
    car: { base: 2000, perKm: 50 },
    suv: { base: 2500, perKm: 60 },
    truck: { base: 4000, perKm: 80 },
    bus: { base: 5000, perKm: 100 }
  };

  const calculateCost = () => {
    if (!distance || !vehicleType) return;

    const distanceNum = parseFloat(distance);
    if (isNaN(distanceNum) || distanceNum < 0) return;

    const prices = basePrices[vehicleType as keyof typeof basePrices];
    let totalCost = prices.base + (distanceNum * prices.perKm);

    // Ночная наценка 30%
    if (timeOfDay === 'night') {
      totalCost *= 1.3;
    }

    // Скидка при больших расстояниях
    if (distanceNum > 50) {
      totalCost *= 0.9; // 10% скидка
    }

    setCost(Math.round(totalCost));
  };

  const resetCalculator = () => {
    setDistance('');
    setVehicleType('');
    setTimeOfDay('day');
    setCost(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-secondary flex items-center justify-center gap-2">
          <Icon name="Calculator" size={24} className="text-primary" />
          Калькулятор стоимости эвакуации
        </CardTitle>
        <CardDescription className="text-lg">
          Рассчитайте стоимость эвакуации вашего автомобиля
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary">
              Расстояние эвакуации (км)
            </label>
            <Input
              type="number"
              placeholder="Введите расстояние"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              min="0"
              step="0.1"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary">
              Тип транспорта
            </label>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">
                  <div className="flex items-center gap-2">
                    <Icon name="Car" size={16} />
                    Легковой автомобиль
                  </div>
                </SelectItem>
                <SelectItem value="suv">
                  <div className="flex items-center gap-2">
                    <Icon name="Car" size={16} />
                    Внедорожник/Кроссовер
                  </div>
                </SelectItem>
                <SelectItem value="truck">
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} />
                    Грузовик
                  </div>
                </SelectItem>
                <SelectItem value="bus">
                  <div className="flex items-center gap-2">
                    <Icon name="Bus" size={16} />
                    Автобус/Микроавтобус
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">
            Время эвакуации
          </label>
          <Select value={timeOfDay} onValueChange={setTimeOfDay}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">
                <div className="flex items-center gap-2">
                  <Icon name="Sun" size={16} />
                  Дневное время (06:00 - 22:00)
                </div>
              </SelectItem>
              <SelectItem value="night">
                <div className="flex items-center gap-2">
                  <Icon name="Moon" size={16} />
                  Ночное время (22:00 - 06:00) +30%
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {cost !== null && (
          <div className="bg-accent p-6 rounded-lg text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">
              {cost.toLocaleString('ru-RU')} ₽
            </div>
            <p className="text-secondary mb-4">Приблизительная стоимость эвакуации</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {parseFloat(distance) > 50 && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Icon name="Percent" size={12} className="mr-1" />
                  Скидка 10% за большое расстояние
                </Badge>
              )}
              {timeOfDay === 'night' && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Icon name="Moon" size={12} className="mr-1" />
                  Ночная наценка 30%
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Button 
            onClick={calculateCost} 
            className="flex-1 bg-primary hover:bg-primary/90"
            disabled={!distance || !vehicleType}
          >
            <Icon name="Calculator" size={16} className="mr-2" />
            Рассчитать стоимость
          </Button>
          <Button 
            onClick={resetCalculator}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Сбросить
          </Button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Дополнительная информация:</p>
              <ul className="space-y-1 text-xs">
                <li>• Цена включает подачу эвакуатора к месту поломки</li>
                <li>• При расстоянии свыше 50 км действует скидка 10%</li>
                <li>• В ночное время (22:00-06:00) действует наценка 30%</li>
                <li>• Итоговая стоимость может отличаться в зависимости от сложности эвакуации</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать эвакуатор: +7 (999) 123-45-67
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}