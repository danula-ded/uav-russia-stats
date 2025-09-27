import { FileText, Search, Filter, Download, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { mockLogs } from "@/shared/api/data"

export function LogsPage() {
  return (
    <div className="flex-1 space-y-4 p-2 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Журнал операций</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Экспорт
          </Button>
        </div>
      </div>

      {/* Фильтры */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Фильтры
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Дата от</label>
              <input
                type="date"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Дата до</label>
              <input
                type="date"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Тип операции</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Все операции</option>
                <option value="upload">Загрузка данных</option>
                <option value="process">Обработка данных</option>
                <option value="export">Экспорт данных</option>
                <option value="delete">Удаление данных</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Пользователь</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Все пользователи</option>
                <option value="analyst">Аналитик</option>
                <option value="operator">Оператор</option>
                <option value="integrator">Интегратор</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Применить фильтры
            </Button>
            <Button variant="outline">Сбросить</Button>
          </div>
        </CardContent>
      </Card>

      {/* Таблица логов */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Журнал операций
          </CardTitle>
          <CardDescription>
            История всех операций в системе
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Время</th>
                  <th className="text-left p-2">Пользователь</th>
                  <th className="text-left p-2">Операция</th>
                  <th className="text-left p-2">Детали</th>
                  <th className="text-left p-2">Статус</th>
                  <th className="text-left p-2">Действия</th>
                </tr>
              </thead>
              <tbody>
                {mockLogs.map((log, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-2 text-sm">{log.date}</td>
                    <td className="p-2 text-sm">{log.user}</td>
                    <td className="p-2 text-sm font-medium">{log.action}</td>
                    <td className="p-2 text-sm text-muted-foreground">{log.details}</td>
                    <td className="p-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        log.status === 'success' ? 'bg-green-100 text-green-800' :
                        log.status === 'error' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {log.status === 'success' ? 'Успешно' :
                         log.status === 'error' ? 'Ошибка' : 'Обработка'}
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Пагинация */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Показано 6 из 1,247 записей
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Предыдущая
              </Button>
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span className="text-sm text-muted-foreground">...</span>
              <Button variant="outline" size="sm">
                208
              </Button>
              <Button variant="outline" size="sm">
                Следующая
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
