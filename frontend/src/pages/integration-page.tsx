import { Settings, Link, Database, Cloud, AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { mockIntegrations } from "@/shared/api/data"

export function IntegrationPage() {
  return (
    <div className="flex-1 space-y-4 p-2 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Интеграция</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Link className="h-4 w-4 mr-2" />
            Добавить интеграцию
          </Button>
        </div>
      </div>

      {/* Статус интеграций */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Активные интеграции</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Работают стабильно
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ошибки</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Требуют внимания
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">В обработке</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Синхронизация данных
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Список интеграций */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {mockIntegrations.map((integration, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {integration.type === 'API' ? <Cloud className="h-5 w-5" /> :
                   integration.type === 'Database' ? <Database className="h-5 w-5" /> :
                   integration.type === 'Webhook' ? <AlertCircle className="h-5 w-5" /> :
                   <Settings className="h-5 w-5" />}
                  <CardTitle className="text-lg">{integration.system}</CardTitle>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  integration.status === 'Активна' ? 'bg-green-100 text-green-800' :
                  integration.status === 'Ошибка' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {integration.status}
                </span>
              </div>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Тип:</span>
                  <span className="ml-2 font-medium">{integration.type}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Записей:</span>
                  <span className="ml-2 font-medium">{integration.records}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted-foreground">Последняя синхронизация:</span>
                  <span className="ml-2 font-medium">{integration.lastSync}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Настройки
                </Button>
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  Логи
                </Button>
                {integration.status === 'error' && (
                  <Button variant="outline" size="sm">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Исправить
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Настройки интеграций */}
      <Card>
        <CardHeader>
          <CardTitle>Настройки интеграций</CardTitle>
          <CardDescription>
            Общие параметры для всех интеграций
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Интервал синхронизации</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="5">5 минут</option>
                <option value="15">15 минут</option>
                <option value="30" selected>30 минут</option>
                <option value="60">1 час</option>
                <option value="240">4 часа</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Таймаут запросов</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="30">30 секунд</option>
                <option value="60" selected>1 минута</option>
                <option value="120">2 минуты</option>
                <option value="300">5 минут</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Уведомления об ошибках</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">Email</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">SMS</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">Telegram</span>
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button>Сохранить настройки</Button>
            <Button variant="outline">Сбросить</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
