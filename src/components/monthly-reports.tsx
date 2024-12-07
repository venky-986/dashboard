import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

const monthlyReports = [
    {
        month: 'Julho 2023',
        production: 500,
        avgHumidity: 75,
        irrigationCycles: 45,
        uptime: 99.5,
        alerts: 3,
        efficiency: 92,
        trends: {
            production: 'up',
            efficiency: 'up',
            alerts: 'down',
        }
    },
    {
        month: 'Junho 2023',
        production: 480,
        avgHumidity: 73,
        irrigationCycles: 50,
        uptime: 98.9,
        alerts: 5,
        efficiency: 89,
        trends: {
            production: 'down',
            efficiency: 'down',
            alerts: 'up',
        }
    },
]

export function MonthlyReports() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Relatórios Mensais</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {monthlyReports.map((report, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{report.month}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <dl className="grid grid-cols-2 gap-4">
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Produção</dt>
                                    <dd className="text-2xl font-bold">
                                        {report.production} kg
                                        {report.trends.production === 'up' ? (
                                            <ArrowUpIcon className="inline ml-1 text-green-500 h-4 w-4" />
                                        ) : (
                                            <ArrowDownIcon className="inline ml-1 text-red-500 h-4 w-4" />
                                        )}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Umidade Média</dt>
                                    <dd className="text-2xl font-bold">{report.avgHumidity}%</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Ciclos de Irrigação</dt>
                                    <dd className="text-2xl font-bold">{report.irrigationCycles}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Tempo de Atividade</dt>
                                    <dd className="text-2xl font-bold">{report.uptime}%</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Alertas</dt>
                                    <dd className="text-2xl font-bold">
                                        {report.alerts}
                                        {report.trends.alerts === 'down' ? (
                                            <ArrowDownIcon className="inline ml-1 text-green-500 h-4 w-4" />
                                        ) : (
                                            <ArrowUpIcon className="inline ml-1 text-red-500 h-4 w-4" />
                                        )}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-muted-foreground">Eficiência</dt>
                                    <dd className="text-2xl font-bold">
                                        {report.efficiency}%
                                        {report.trends.efficiency === 'up' ? (
                                            <ArrowUpIcon className="inline ml-1 text-green-500 h-4 w-4" />
                                        ) : (
                                            <ArrowDownIcon className="inline ml-1 text-red-500 h-4 w-4" />
                                        )}
                                    </dd>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

