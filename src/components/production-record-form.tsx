"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, MouseIcon as Mushroom } from 'lucide-react'

export function ProductionRecordForm() {
    const [startDate, setStartDate] = useState<Date>()
    const [harvestDate, setHarvestDate] = useState<Date>(new Date())
    const [batchId, setBatchId] = useState("")
    const [growingArea, setGrowingArea] = useState("")
    const [quantity, setQuantity] = useState("")
    const [quality, setQuality] = useState(3)
    const [notes, setNotes] = useState("")
    const [problems, setProblems] = useState({
        contamination: false,
        sizeVariation: false,
        colorIssues: false,
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Registro de Nova Produção</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="startDate" className="block text-sm font-medium">
                                Data de Início do Cultivo
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !startDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {startDate ? format(startDate, "PPP") : <span>Selecione uma data</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={startDate}
                                        onSelect={setStartDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="batchId" className="block text-sm font-medium">
                                Identificador do Lote
                            </label>
                            <Input
                                id="batchId"
                                value={batchId}
                                onChange={(e) => setBatchId(e.target.value)}
                                placeholder="Ex: L001"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="growingArea" className="block text-sm font-medium">
                                Área de Cultivo
                            </label>
                            <Select value={growingArea} onValueChange={setGrowingArea}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione a área" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="area1">Área 1</SelectItem>
                                    <SelectItem value="area2">Área 2</SelectItem>
                                    <SelectItem value="area3">Área 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="harvestDate" className="block text-sm font-medium">
                                Data da Colheita
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !harvestDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {harvestDate ? format(harvestDate, "PPP") : <span>Selecione uma data</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={harvestDate}
                                        onSelect={(day) => {
                                            if (day) setHarvestDate(day);
                                        }}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="quantity" className="block text-sm font-medium">
                                Quantidade Colhida (kg)
                            </label>
                            <Input
                                id="quantity"
                                type="number"
                                step="0.01"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Qualidade</label>
                            <div className="flex space-x-1">
                                {[1, 2, 3].map((value) => (
                                    <Button
                                        key={value}
                                        type="button"
                                        variant={quality === value ? "default" : "outline"}
                                        size="icon"
                                        onClick={() => setQuality(value)}
                                    >
                                        <Mushroom className={cn("h-4 w-4", quality >= value ? "text-yellow-500" : "text-gray-300")} />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="notes" className="block text-sm font-medium">
                            Observações
                        </label>
                        <Textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Notas sobre qualidade, problemas, etc."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Problemas Encontrados</label>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="contamination"
                                    checked={problems.contamination}
                                    onCheckedChange={(checked) =>
                                        setProblems((prev) => ({ ...prev, contamination: checked as boolean }))
                                    }
                                />
                                <label htmlFor="contamination" className="text-sm">Contaminação</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="sizeVariation"
                                    checked={problems.sizeVariation}
                                    onCheckedChange={(checked) =>
                                        setProblems((prev) => ({ ...prev, sizeVariation: checked as boolean }))
                                    }
                                />
                                <label htmlFor="sizeVariation" className="text-sm">Variação de Tamanho</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="colorIssues"
                                    checked={problems.colorIssues}
                                    onCheckedChange={(checked) =>
                                        setProblems((prev) => ({ ...prev, colorIssues: checked as boolean }))
                                    }
                                />
                                <label htmlFor="colorIssues" className="text-sm">Problemas de Cor</label>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="w-80">Registrar Produção</Button>
                </form>
            </CardContent>
        </Card>
    )
}

