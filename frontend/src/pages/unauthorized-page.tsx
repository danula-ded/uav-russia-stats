import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { ShieldX } from 'lucide-react'

export function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
            <ShieldX className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Доступ запрещен</CardTitle>
          <CardDescription>
            Для доступа к этой странице требуется авторизация
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Пожалуйста, войдите в систему для продолжения работы
          </p>
          <Button asChild className="w-full">
            <Link to="/">
              Войти в систему
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
