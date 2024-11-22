'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Gamepad2, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ActivitiesGenerator() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    file: null as File | null,
    subject: '',
    grade: '',
    topics: '',
    learningObjective: '',
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
    router.push('/preparation/activities-generator/generated')
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-full">
              <Gamepad2 className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Activities Generator</h1>
              <p className="text-sm text-gray-500">Generate engaging activities based on your slides or custom input</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Upload Slides</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500">PPT, PPTX, PDF (MAX. 100MB)</p>
                    </div>
                    <Input id="file" name="file" type="file" className="hidden" onChange={handleFileChange} accept=".ppt,.pptx,.pdf" />
                  </label>
                </div>
                {formData.file && (
                  <p className="text-sm text-gray-500">File selected: {formData.file.name}</p>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Custom Input</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select name="subject" onValueChange={(value) => handleSelectChange('subject', value)}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="grade">Grade Level</Label>
                  <Select name="grade" onValueChange={(value) => handleSelectChange('grade', value)}>
                    <SelectTrigger id="grade">
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elementary">Elementary School</SelectItem>
                      <SelectItem value="middle">Middle School</SelectItem>
                      <SelectItem value="high">High School</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="topics">Topics</Label>
                  <Input
                    id="topics"
                    name="topics"
                    placeholder="Enter the main topics covered"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="learningObjective">Learning Objective</Label>
                  <Textarea
                    id="learningObjective"
                    name="learningObjective"
                    placeholder="Describe the main learning objective for these activities"
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button onClick={handleSubmit}>Generate Activities</Button>
        </div>
      </div>
    </div>
  )
}

