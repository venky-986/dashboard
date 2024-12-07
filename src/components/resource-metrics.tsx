import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplet, TrendingDown, Gauge } from 'lucide-react'

export function ResourceMetrics() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Consumo de Água Hoje</CardTitle>
                    <Droplet className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2.500 L</div>
                    <p className="text-xs text-muted-foreground">+5% em relação à média</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Economia Mensal</CardTitle>
                    <TrendingDown className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">R$ 350,00</div>
                    <p className="text-xs text-muted-foreground">10% de redução nos custos</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Eficiência do Sistema</CardTitle>
                    <Gauge className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">92%</div>
                    <p className="text-xs text-muted-foreground">+2% em relação ao mês anterior</p>
                </CardContent>
            </Card>
        </div>
    )
}

