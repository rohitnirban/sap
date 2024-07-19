import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="grid gap-6 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4">
        <div className="bg-muted rounded-lg p-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Current Balance</div>
            <div className="text-4xl font-bold">300 Credits</div>
          </div>
          <Button>Add Balance</Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>View your recent transactions and account activity.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-05-15</TableCell>
                  <TableCell>Peepal Purchased</TableCell>
                  <TableCell className="text-green-500">40 Credits</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Completed</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-10</TableCell>
                  <TableCell>Tulsi Purchased</TableCell>
                  <TableCell className="text-green-500">25 Credits</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Completed</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-05</TableCell>
                  <TableCell>Palm Purchased</TableCell>
                  <TableCell className="text-green-500">20 Credits</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Completed</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-04-30</TableCell>
                  <TableCell>Peepal Purchased</TableCell>
                  <TableCell className="text-green-500">40 Credits</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Completed</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-04-25</TableCell>
                  <TableCell>Peepal Purchased</TableCell>
                  <TableCell className="text-green-500">40 Credits</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Completed</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}