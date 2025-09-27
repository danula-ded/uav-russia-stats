import { Upload, FileText, Package, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { mockPackages } from "@/shared/api/data"

export function UploadPage() {
  return (
    <div className="flex-1 space-y-4 p-2 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Загрузка пакетов</h2>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Загрузить новый пакет
            </CardTitle>
            <CardDescription>
              Выберите файл с данными о БПЛА для загрузки в систему
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-4">
                Перетащите файл сюда или нажмите для выбора
              </p>
              <Button>Выбрать файл</Button>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Поддерживаемые форматы:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• CSV файлы (.csv)</li>
                <li>• Excel файлы (.xlsx, .xls)</li>
                <li>• JSON файлы (.json)</li>
                <li>• XML файлы (.xml)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Последние загрузки
            </CardTitle>
            <CardDescription>
              История загруженных пакетов данных
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockPackages.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      file.status === 'Загружен' ? 'bg-green-100 text-green-600' :
                      file.status === 'Ошибка' ? 'bg-red-100 text-red-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {file.status === 'Загружен' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : file.status === 'Ошибка' ? (
                        <AlertCircle className="h-4 w-4" />
                      ) : (
                        <Package className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{file.records} записей</p>
                    <p className={`text-xs ${
                      file.status === 'Загружен' ? 'text-green-600' :
                      file.status === 'Ошибка' ? 'text-red-600' :
                      'text-yellow-600'
                    }`}>
                      {file.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Статистика загрузок</CardTitle>
          <CardDescription>
            Общая информация о загруженных данных
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Всего загрузок</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1,247</div>
              <div className="text-sm text-muted-foreground">Записей загружено</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98.2%</div>
              <div className="text-sm text-muted-foreground">Успешных загрузок</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2.1 GB</div>
              <div className="text-sm text-muted-foreground">Общий размер</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}