import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Book, Brain, FileQuestion, Lightbulb, Presentation } from 'lucide-react'

export default function GeneratedMaterial() {
  return (
    <div className="container mx-auto py-4 space-y-4">
      <Card className="border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl sm:text-3xl">Introduction to Photosynthesis</CardTitle>
          <CardDescription className="text-base sm:text-lg">
            A comprehensive lesson on the process of converting light energy to chemical energy
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 rounded-full p-1.5">
                <Book className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle className="text-xl">Core Material</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>Photosynthesis is the process by which plants use sunlight, water and carbon dioxide to produce oxygen and energy in the form of sugar.</p>
            <p>The process takes place in the chloroplasts, using the green pigment chlorophyll.</p>
            <p className="font-semibold bg-green-50 p-2 rounded-lg text-center">6CO2 + 6H2O + light energy → C6H12O6 + 6O2</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 rounded-full p-1.5">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Discussion Prompts</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Card className="bg-blue-50">
              <CardContent className="p-2 text-sm">
                How does photosynthesis impact the global carbon cycle?
              </CardContent>
            </Card>
            <Card className="bg-blue-50">
              <CardContent className="p-2 text-sm">
                What would happen if all plants on Earth stopped photosynthesizing?
              </CardContent>
            </Card>
            <Card className="bg-blue-50">
              <CardContent className="p-2 text-sm">
                How might climate change affect the process of photosynthesis?
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-100 rounded-full p-1.5">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">Activity Suggestions</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Card className="bg-yellow-50">
              <CardContent className="p-2 text-sm">
                1. Conduct an experiment to show how light intensity affects the rate of photosynthesis using aquatic plants.
              </CardContent>
            </Card>
            <Card className="bg-yellow-50">
              <CardContent className="p-2 text-sm">
                2. Create a model of a chloroplast and label its parts.
              </CardContent>
            </Card>
            <Card className="bg-yellow-50">
              <CardContent className="p-2 text-sm">
                3. Design a poster illustrating the steps of photosynthesis.
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 rounded-full p-1.5">
                <FileQuestion className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Quiz</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Card className="bg-purple-50">
              <CardContent className="p-2 text-sm">
                1. What are the main ingredients needed for photosynthesis?
              </CardContent>
            </Card>
            <Card className="bg-purple-50">
              <CardContent className="p-2 text-sm">
                2. In which part of the plant cell does photosynthesis occur?
              </CardContent>
            </Card>
            <Card className="bg-purple-50">
              <CardContent className="p-2 text-sm">
                3. What is the primary pigment involved in capturing light energy?
              </CardContent>
            </Card>
            <Card className="bg-purple-50">
              <CardContent className="p-2 text-sm">
                4. What gas is released as a byproduct of photosynthesis?
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-2">
            <div className="bg-red-100 rounded-full p-1.5">
              <Presentation className="w-5 h-5 text-red-600" />
            </div>
            <CardTitle className="text-xl">Exit Ticket</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm bg-red-50 p-3 rounded-lg">Explain in your own words why photosynthesis is important for life on Earth. Include at least two specific reasons in your answer.</p>
        </CardContent>
      </Card>

      <Card>
        <CardFooter className="flex justify-between py-2">
          <Link href="/preparation/generate-material/">
            <Button variant="outline" size="sm">Back to Materials</Button>
          </Link>
          <Button size="sm">Download Material</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

