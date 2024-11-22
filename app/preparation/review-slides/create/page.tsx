'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SlidersHorizontal, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ReviewSlides() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    file: null as File | null,
    subject: '',
    grade: '',
    additionalPrompt: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log(formData)
    // For now, we'll just log the data and pretend to redirect
    router.push('/preparation/review-slides/generated')
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-full">
              <SlidersHorizontal className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-900">Review My Slides</h2>
              <p className="text-gray-500 text-sm">Upload and review your presentation slides, we provide data-driven insightful feedback</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="file">Upload Slides</Label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500">PPT, PPTX, PDF (MAX. 100MB)</p>
                    </div>
                    <Input id="file" name="file" type="file" className="hidden" onChange={handleFileChange} accept=".ppt,.pptx,.pdf" />
                  </label>
                </div>
                {formData.file && (
                  <p className="text-sm text-gray-500 mt-2">File selected: {formData.file.name}</p>
                )}
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
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="grade">Grade Level</Label>
                <Select name="grade" onValueChange={(value) => handleSelectChange('grade', value)}>
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="elementary">Elementary School</SelectItem>
                    <SelectItem value="middle">Middle School</SelectItem>
                    <SelectItem value="high">High School</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="additionalPrompt">Additional Prompt</Label>
                <Textarea
                  id="additionalPrompt"
                  name="additionalPrompt"
                  placeholder="Any specific areas you want feedback on? E.g., content clarity, visual design, engagement level"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between px-6 pb-6">
          <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Review Slides</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

