"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from 'lucide-react'

export function IrrigationTestPanel() {
    const [selectedZone, setSelectedZone] = useState("")
    const [testDuration, setTestDuration] = useState("5")
    const [testStatus, setTestStatus] = useState<"idle" | "running" | "completed">("idle")
    const [testResult, setTestResult] = useState<"success" | "failure" | null>(null)

    const handleStartTest = () => {
        setTestStatus("running")
        // Simulate a test run
        setTimeout(() => {
            setTestStatus("completed")
            setTestResult(Math.random() > 0.2 ? "success" : "failure")
        }, parseInt(testDuration) * 1000)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Teste do Sistema de Irrigação</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="zone">Zona de Irrigação</Label>
                            <Select value={selectedZone} onValueChange={setSelectedZone}>
                                <SelectTrigger id="zone">
                                    <SelectValue placeholder="Selecione a zona" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="zone1">Zona 1</SelectItem>
                                    <SelectItem value="zone2">Zona 2</SelectItem>
                                    <SelectItem value="zone3">Zona 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="duration">Duração do Teste (segundos)</Label>
                            <Input
                                id="duration"
                                type="number"
                                value={testDuration}
                                onChange={(e) => setTestDuration(e.target.value)}
                                min="1"
                                max="60"
                            />
                        </div>
                    </div>
                    <Button onClick={handleStartTest} disabled={testStatus === "running" || !selectedZone}>
                        {testStatus === "running" ? "Teste em Andamento..." : "Iniciar Teste"}
                    </Button>
                    {testStatus === "completed" && (
                        <div className={`flex items-center space-x-2 ${testResult === "success" ? "text-green-500" : "text-red-500"}`}>
                            {testResult === "success" ? (
                                <CheckCircle className="h-5 w-5" />
                            ) : (
                                <AlertCircle className="h-5 w-5" />
                            )}
                            <span>{testResult === "success" ? "Teste concluído com sucesso" : "Falha no teste. Entre em contato com o suporte."}</span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

