"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// In a real application, this data would come from your backend or local storage
const mockData = {
    currentBatch: {
        id: "L001",
        startDate: "2023-07-01",
        totalHarvest: 125.5,
        daysActive: 15,
    },
    dailyHarvests: [
        { date: "2023-07-10", amount: 15.2 },
        { date: "2023-07-11", amount: 14.8 },
        { date: "2023-07-12", amount: 16.5 },
        { date: "2023-07-13", amount: 15.9 },
        { date: "2023-07-14", amount: 16.2 },
    ],
    recentRecords: [
        { date: "2023-07-14", amount: 16.2, quality: 4, problems: [] },
        { date: "2023-07-13", amount: 15.9, quality: 3, problems: ["sizeVariation"] },
        { date: "2023-07-12", amount: 16.5, quality: 5, problems: [] },
        { date: "2023-07-11", amount: 14.8, quality: 4, problems: [] },
        { date: "2023-07-10", amount: 15.2, quality: 3, problems: ["colorIssues"] },
    ],
}

export function ProductionOverview() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Visão da Produção</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Lote Atual: {mockData.currentBatch.id}</h3>
                            <p>Data de Início: {mockData.currentBatch.startDate}</p>
                            <p>Total Colhido: {mockData.currentBatch.totalHarvest} kg</p>
                            <p>Dias Ativos: {mockData.currentBatch.daysActive}</p>
                            <Badge className="mt-2" variant={mockData.currentBatch.daysActive <= 20 ? "default" : "destructive"}>
                                {mockData.currentBatch.daysActive <= 20 ? "Saudável" : "Atenção Necessária"}
                            </Badge>
                        </div>
                        <div className="h-[200px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={mockData.dailyHarvests}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Registros Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockData.recentRecords.map((record, index) => (
                            <div key={index} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <p className="font-semibold">{record.date}</p>
                                    <p>Quantidade: {record.amount} kg</p>
                                </div>
                                <div className="text-right">
                                    <p>Qualidade: {record.quality}/5</p>
                                    {record.problems.length > 0 && (
                                        <Badge variant="outline" className="ml-2">
                                            {record.problems.join(", ")}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
