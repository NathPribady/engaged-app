'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function GenerateMaterial() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    gradeLevel: '',
    subject: '',
    topic: '',
    additionalInstructions: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    // For now, we'll just redirect to a mock generated material page
    router.push('/preparation/generate-material/generated')
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-pink-50 p-3 rounded-full">
              <FileText className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-900">Create New Material</h2>
              <p className="text-gray-500 text-sm">Customize and generate educational content with real-world contextualization</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gradeLevel">Grade Level</Label>
                <Select name="gradeLevel" onValueChange={(value) => handleSelectChange('gradeLevel', value)}>
                  <SelectTrigger id="gradeLevel">
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="elementary">Elementary School</SelectItem>
                    <SelectItem value="middle">Middle School</SelectItem>
                    <SelectItem value="high">High School</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Select name="subject" onValueChange={(value) => handleSelectChange('subject', value)}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  name="topic"
                  placeholder="e.g., Photosynthesis, World War II, Algebraic Equations"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="additionalInstructions">Additional Instructions</Label>
                <Textarea
                  id="additionalInstructions"
                  name="additionalInstructions"
                  placeholder="Any specific requirements or focus areas for the material"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between px-6 pb-6">
          <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Generate Material</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

