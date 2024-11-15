import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import '/app/globals.css';

export default function Evaluation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evaluation</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the Evaluation page. Here you can manage and review student evaluations.</p>
        <ul className="list-disc pl-5 mt-4">
          <li>Create new assessments</li>
          <li>Grade submitted work</li>
          <li>View student progress</li>
          <li>Generate performance reports</li>
        </ul>
      </CardContent>
    </Card>
  )
}