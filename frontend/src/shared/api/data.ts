export interface User {
  id_user: number
  name: string
  role: string
  token: string
}

export interface Region {
  code: string
  name: string
  uav_count: number
  interceptions: number
  last_activity: string
  coordinates?: {
    x: number
    y: number
  }
}

export interface Package {
  id: number
  name: string
  date: string
  status: string
  records?: number
  size?: string
}

export interface Log {
  id: number
  user: string
  action: string
  date: string
  details?: string
  status?: string
}

export interface Integration {
  id: number
  system: string
  status: string
  type?: string
  description?: string
  lastSync?: string
  records?: string
}

// Mock данные
export const mockUser: User = {
  id_user: 1,
  name: "Иван Петров",
  role: "Аналитик",
  token: "mock-token-12345"
}

export const mockRegions: Region[] = [
  {
    code: "77",
    name: "Москва",
    uav_count: 120,
    interceptions: 5,
    last_activity: "2025-09-26",
    coordinates: { x: 50, y: 30 }
  },
  {
    code: "78",
    name: "Санкт-Петербург",
    uav_count: 89,
    interceptions: 3,
    last_activity: "2025-09-25",
    coordinates: { x: 45, y: 25 }
  },
  {
    code: "23",
    name: "Краснодарский край",
    uav_count: 67,
    interceptions: 8,
    last_activity: "2025-09-26",
    coordinates: { x: 55, y: 60 }
  },
  {
    code: "61",
    name: "Ростовская область",
    uav_count: 54,
    interceptions: 4,
    last_activity: "2025-09-24",
    coordinates: { x: 60, y: 55 }
  },
  {
    code: "31",
    name: "Белгородская область",
    uav_count: 43,
    interceptions: 6,
    last_activity: "2025-09-25",
    coordinates: { x: 50, y: 50 }
  },
  {
    code: "46",
    name: "Курская область",
    uav_count: 38,
    interceptions: 2,
    last_activity: "2025-09-23",
    coordinates: { x: 48, y: 48 }
  },
  {
    code: "36",
    name: "Воронежская область",
    uav_count: 41,
    interceptions: 3,
    last_activity: "2025-09-24",
    coordinates: { x: 52, y: 52 }
  },
  {
    code: "71",
    name: "Тульская область",
    uav_count: 35,
    interceptions: 1,
    last_activity: "2025-09-22",
    coordinates: { x: 48, y: 45 }
  }
]

export const mockPackages: Package[] = [
  {
    id: 1,
    name: "uav_data_2024_09.csv",
    date: "2025-09-25",
    status: "Загружен",
    records: 156,
    size: "2.1 MB"
  },
  {
    id: 2,
    name: "moscow_region_data.xlsx",
    date: "2025-09-26",
    status: "Обработан",
    records: 89,
    size: "1.5 MB"
  },
  {
    id: 3,
    name: "krasnodar_data.json",
    date: "2025-09-24",
    status: "Ошибка",
    records: 0,
    size: "0 MB"
  },
  {
    id: 4,
    name: "rostov_region.csv",
    date: "2025-09-23",
    status: "Загружен",
    records: 67,
    size: "1.2 MB"
  },
  {
    id: 5,
    name: "belgorod_data.xml",
    date: "2025-09-22",
    status: "Обработка",
    records: 43,
    size: "0.8 MB"
  }
]

export const mockLogs: Log[] = [
  {
    id: 1,
    user: "Иван Петров (Аналитик)",
    action: "Загрузка данных",
    date: "2025-09-26 14:30:15",
    details: "uav_data_2024_09.csv (156 записей)",
    status: "success"
  },
  {
    id: 2,
    user: "Мария Сидорова (Оператор)",
    action: "Обработка данных",
    date: "2025-09-26 14:25:42",
    details: "Обработка пакета moscow_region_data.xlsx",
    status: "success"
  },
  {
    id: 3,
    user: "Алексей Козлов (Интегратор)",
    action: "Экспорт данных",
    date: "2025-09-26 14:20:18",
    details: "Экспорт в формат JSON для внешней системы",
    status: "success"
  },
  {
    id: 4,
    user: "Иван Петров (Аналитик)",
    action: "Загрузка данных",
    date: "2025-09-26 14:15:33",
    details: "krasnodar_data.json (ошибка валидации)",
    status: "error"
  },
  {
    id: 5,
    user: "Мария Сидорова (Оператор)",
    action: "Удаление данных",
    date: "2025-09-26 14:10:07",
    details: "Удаление устаревших записей за август 2024",
    status: "success"
  },
  {
    id: 6,
    user: "Алексей Козлов (Интегратор)",
    action: "Обработка данных",
    date: "2025-09-26 14:05:21",
    details: "Синхронизация с внешним API",
    status: "processing"
  }
]

export const mockIntegrations: Integration[] = [
  {
    id: 1,
    system: "Внешняя система мониторинга",
    status: "Активна",
    type: "API",
    description: "Получение данных о БПЛА в реальном времени",
    lastSync: "2025-09-26 14:30:15",
    records: "1,247"
  },
  {
    id: 2,
    system: "База данных МО РФ",
    status: "Активна",
    type: "Database",
    description: "Синхронизация с центральной базой данных",
    lastSync: "2025-09-26 14:25:42",
    records: "2,891"
  },
  {
    id: 3,
    system: "Система уведомлений",
    status: "Ошибка",
    type: "Webhook",
    description: "Отправка уведомлений о критических событиях",
    lastSync: "2025-09-26 13:45:18",
    records: "0"
  },
  {
    id: 4,
    system: "Аналитическая платформа",
    status: "Обработка",
    type: "API",
    description: "Экспорт данных для аналитических отчетов",
    lastSync: "2025-09-26 14:20:33",
    records: "156"
  }
]
