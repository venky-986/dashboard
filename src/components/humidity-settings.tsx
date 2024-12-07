import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { InfoIcon as InfoCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HumiditySettingsProps {
    humidity: {
        colonization: number
        fruiting: number
        harvest: number
    }
    onUpdate: (humidity: HumiditySettingsProps['humidity']) => void
}

export function HumiditySettings({ humidity, onUpdate }: HumiditySettingsProps) {
    const handleUpdate = (phase: keyof typeof humidity) => (value: number[]) => {
        onUpdate({ ...humidity, [phase]: value[0] })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    Níveis de Umidade
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <InfoCircle className="h-5 w-5 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Ajuste os níveis de umidade para cada fase do cultivo.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {Object.entries(humidity).map(([phase, value]) => (
                    <div key={phase} className="space-y-2">
                        <Label htmlFor={phase} className="capitalize">
                            {phase === 'colonization' ? 'Colonização' : phase === 'fruiting' ? 'Frutificação' : 'Colheita'}
                        </Label>
                        <div className="flex items-center space-x-4">
                            <Slider
                                id={phase}
                                min={60}
                                max={100}
                                step={1}
                                value={[value]}
                                onValueChange={handleUpdate(phase as keyof typeof humidity)}
                            />
                            <span className="w-12 text-right">{value}%</span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

