import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { TrendingUp, TrendingDown, Users, Activity } from "lucide-react"
import { RussiaMap } from "@/features/map/russia-map"
import { mockRegions } from "@/shared/api/data"

// Данные для графиков на основе mockRegions
const barData = mockRegions.slice(0, 6).map(region => ({
  name: region.name.substring(0, 3),
  БПЛА: region.uav_count,
  Перехваты: region.interceptions
}))

const pieData = [
  { name: 'Активные регионы', value: mockRegions.filter(r => r.uav_count > 50).length, color: '#ef4444' },
  { name: 'Средняя активность', value: mockRegions.filter(r => r.uav_count <= 50 && r.uav_count > 30).length, color: '#f59e0b' },
  { name: 'Низкая активность', value: mockRegions.filter(r => r.uav_count <= 30).length, color: '#10b981' },
]

const totalUavs = mockRegions.reduce((sum, region) => sum + region.uav_count, 0)
const totalInterceptions = mockRegions.reduce((sum, region) => sum + region.interceptions, 0)

const statsData = [
  {
    title: 'Всего БПЛА',
    value: totalUavs.toString(),
    change: '+12%',
    trend: 'up',
    icon: Activity,
  },
  {
    title: 'Перехваты',
    value: totalInterceptions.toString(),
    change: '+8%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    title: 'Активные регионы',
    value: mockRegions.filter(r => r.uav_count > 50).length.toString(),
    change: '-3%',
    trend: 'down',
    icon: TrendingDown,
  },
  {
    title: 'Всего регионов',
    value: mockRegions.length.toString(),
    change: '+15%',
    trend: 'up',
    icon: Users,
  },
]

export function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-2 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Дашборд</h2>
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm text-muted-foreground">
            Последнее обновление: {new Date().toLocaleString('ru-RU')}
          </span>
        </div>
      </div>

      {/* Статистические карточки */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`inline-flex items-center ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.change}
                </span>
                {' '}с прошлого месяца
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Карта и диаграммы */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        {/* Интерактивная карта России */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Карта регионов России</CardTitle>
            <CardDescription>
              Интерактивная карта с данными по БПЛА по регионам
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-64 sm:h-80 lg:h-96 w-full">
              <RussiaMap regions={mockRegions} />
            </div>
          </CardContent>
        </Card>

        {/* Круговая диаграмма */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Активность регионов</CardTitle>
            <CardDescription>
              Распределение регионов по уровню активности
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Столбчатая диаграмма */}
      <Card>
        <CardHeader>
          <CardTitle>Статистика по регионам</CardTitle>
          <CardDescription>
            Количество БПЛА и перехватов по регионам
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                }}
              />
              <Legend />
              <Bar dataKey="БПЛА" fill="#3b82f6" name="БПЛА" />
              <Bar dataKey="Перехваты" fill="#ef4444" name="Перехваты" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Дополнительная информация */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Топ регионы</CardTitle>
            <CardDescription>
              Регионы с наибольшим количеством БПЛА
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { region: 'Московская область', count: 89, percentage: 20.6 },
                { region: 'Краснодарский край', count: 67, percentage: 15.5 },
                { region: 'Ростовская область', count: 54, percentage: 12.5 },
                { region: 'Белгородская область', count: 43, percentage: 10.0 },
                { region: 'Курская область', count: 38, percentage: 8.8 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.region}</p>
                    <p className="text-sm text-muted-foreground">{item.count} БПЛА</p>
                  </div>
                  <div className="text-sm font-medium">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Последние события</CardTitle>
            <CardDescription>
              Недавние операции с БПЛА
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: '2 часа назад', event: 'Уничтожен БПЛА над Москвой', type: 'destroyed' },
                { time: '4 часа назад', event: 'Перехвачен БПЛА в Ростове', type: 'intercepted' },
                { time: '6 часов назад', event: 'Поврежден БПЛА в Белгороде', type: 'damaged' },
                { time: '8 часов назад', event: 'Уничтожен БПЛА в Курске', type: 'destroyed' },
                { time: '12 часов назад', event: 'Перехвачен БПЛА в Краснодаре', type: 'intercepted' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full ${
                    item.type === 'destroyed' ? 'bg-red-500' :
                    item.type === 'damaged' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.event}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
