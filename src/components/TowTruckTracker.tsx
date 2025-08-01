import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface TruckLocation {
  lat: number;
  lng: number;
  address: string;
}

interface TrackingData {
  truckId: string;
  driverName: string;
  status: 'dispatched' | 'en_route' | 'arrived' | 'completed';
  estimatedArrival: string;
  currentLocation: TruckLocation;
  destination: TruckLocation;
  distance: number;
  progress: number;
}

export default function TowTruckTracker() {
  const [isTracking, setIsTracking] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  // Симуляция получения данных о местоположении эвакуатора
  const startTracking = () => {
    setIsTracking(true);
    
    // Начальные данные
    const initialData: TrackingData = {
      truckId: "EVK-001",
      driverName: "Алексей Петров",
      status: 'dispatched',
      estimatedArrival: "15 минут",
      currentLocation: {
        lat: 55.7558,
        lng: 37.6176,
        address: "ул. Тверская, 12"
      },
      destination: {
        lat: 55.7400,
        lng: 37.6200,
        address: "ул. Арбат, 25"
      },
      distance: 3.2,
      progress: 0
    };
    
    setTrackingData(initialData);
  };

  // Симуляция движения эвакуатора
  useEffect(() => {
    if (!isTracking || !trackingData) return;

    const interval = setInterval(() => {
      setTrackingData(prev => {
        if (!prev) return null;
        
        const newProgress = Math.min(prev.progress + 2, 100);
        const remainingDistance = prev.distance * (1 - newProgress / 100);
        const estimatedMinutes = Math.max(Math.round(remainingDistance * 3), 1);
        
        let newStatus = prev.status;
        if (newProgress >= 100) {
          newStatus = 'arrived';
        } else if (newProgress >= 20) {
          newStatus = 'en_route';
        }
        
        return {
          ...prev,
          progress: newProgress,
          status: newStatus,
          estimatedArrival: newProgress >= 100 ? "Прибыл" : `${estimatedMinutes} мин`,
          currentLocation: {
            ...prev.currentLocation,
            address: newProgress >= 100 ? prev.destination.address : 
                    newProgress >= 50 ? "ул. Новый Арбат, 10" : prev.currentLocation.address
          }
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTracking, trackingData]);

  const stopTracking = () => {
    setIsTracking(false);
    setTrackingData(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'dispatched':
        return <Badge className="bg-blue-500">Направлен</Badge>;
      case 'en_route':
        return <Badge className="bg-yellow-500">В пути</Badge>;
      case 'arrived':
        return <Badge className="bg-green-500">Прибыл</Badge>;
      case 'completed':
        return <Badge className="bg-gray-500">Завершено</Badge>;
      default:
        return <Badge>Неизвестно</Badge>;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-secondary flex items-center justify-center gap-2">
          <Icon name="MapPin" size={24} className="text-primary" />
          Отслеживание эвакуатора в реальном времени
        </CardTitle>
        <CardDescription className="text-lg">
          Следите за местоположением эвакуатора на карте
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isTracking ? (
          <div className="text-center space-y-4">
            <div className="bg-accent p-8 rounded-lg">
              <Icon name="Truck" size={64} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Отслеживание не активно
              </h3>
              <p className="text-gray-600 mb-4">
                Нажмите кнопку ниже, чтобы начать отслеживание эвакуатора
              </p>
              <Button onClick={startTracking} className="bg-primary hover:bg-primary/90">
                <Icon name="Play" size={16} className="mr-2" />
                Начать отслеживание
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Карта (имитация) */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 h-80 rounded-lg relative overflow-hidden border-2 border-gray-200">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Маршрут */}
              <div className="absolute top-1/2 left-4 right-4 h-1 bg-primary/30 rounded-full transform -translate-y-1/2">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${trackingData?.progress || 0}%` }}
                ></div>
              </div>
              
              {/* Стартовая точка */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute -bottom-6 -left-8 text-xs bg-white px-2 py-1 rounded shadow whitespace-nowrap">
                  База эвакуации
                </div>
              </div>
              
              {/* Эвакуатор */}
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-1000 ease-linear"
                style={{ left: `${4 + (trackingData?.progress || 0) * 0.88}%` }}
              >
                <div className="relative">
                  <Icon name="Truck" size={24} className="text-primary animate-bounce" />
                  <div className="absolute -bottom-8 -left-12 text-xs bg-primary text-white px-2 py-1 rounded shadow whitespace-nowrap">
                    {trackingData?.truckId}
                  </div>
                </div>
              </div>
              
              {/* Точка назначения */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-1/2">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-6 -right-8 text-xs bg-white px-2 py-1 rounded shadow whitespace-nowrap">
                  Ваше авто
                </div>
              </div>
            </div>

            {/* Информация о статусе */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" size={20} className="text-primary" />
                    Информация о водителе
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Водитель:</span>
                    <span className="font-medium">{trackingData?.driverName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Номер эвакуатора:</span>
                    <span className="font-medium">{trackingData?.truckId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Статус:</span>
                    {getStatusBadge(trackingData?.status || '')}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    Время прибытия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {trackingData?.estimatedArrival}
                    </div>
                    <div className="text-sm text-gray-600">до прибытия</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span>{trackingData?.progress}%</span>
                    </div>
                    <Progress value={trackingData?.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Текущее местоположение */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon name="Navigation" size={20} className="text-primary" />
                  Текущее местоположение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={16} className="text-gray-400" />
                    <span>{trackingData?.currentLocation.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Route" size={16} />
                    <span>{trackingData?.distance} км</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Уведомления */}
            {trackingData?.status === 'arrived' && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-800">Эвакуатор прибыл!</h4>
                      <p className="text-green-700">Водитель уже на месте. Проверьте свой телефон.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Управление */}
            <div className="flex justify-center gap-4">
              <Button onClick={stopTracking} variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                <Icon name="Square" size={16} className="mr-2" />
                Остановить отслеживание
              </Button>
              <Button className="bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться с водителем
              </Button>
            </div>
          </div>
        )}

        {/* Дополнительная информация */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Как работает отслеживание:</p>
              <ul className="space-y-1 text-xs">
                <li>• GPS-навигация в реальном времени</li>
                <li>• Автоматические уведомления о статусе</li>
                <li>• Прямая связь с водителем эвакуатора</li>
                <li>• Точное время прибытия с учетом пробок</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}