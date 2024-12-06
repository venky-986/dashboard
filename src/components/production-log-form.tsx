"use client"

import { SetStateAction, useState} from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"

export function ProductionLogForm() {
    const [date, setDate] = useState("")
    const [quantity, setQuantity] = useState("")
    const [notes, setNotes] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send this data to your backend
        console.log("Production log submitted:", {date, quantity, notes})
        // Reset form
        setDate("")
        setQuantity("")
        setNotes("")
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Registro de Produção</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-1">
                            Data da Colheita
                        </label>
                        <Input
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                            Quantidade Colhida (kg)
                        </label>
                        <Input
                            id="quantity"
                            type="number"
                            step="0.01"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium mb-1">
                            Observações
                        </label>
                        <Textarea
                            id="notes"
                            value={notes}
                            onChange={(e: { target: { value: SetStateAction<string> } }) => setNotes(e.target.value)}
                            placeholder="Qualidade, problemas encontrados, etc."
                        />
                    </div>
                    <Button type="submit">Registrar</Button>
                </form>
            </CardContent>
        </Card>
    )
}

