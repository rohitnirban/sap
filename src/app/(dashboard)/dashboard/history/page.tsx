import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BanknoteIcon, WalletIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <div className="grid gap-6 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4">
        <div className="bg-muted rounded-lg p-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Current Balance</div>
            <div className="text-4xl font-bold">300 Credits</div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Balance</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="p-4 flex justify-around items-center">
                <Button>Watch Advertisement</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Through Bank or UPI</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <Card className="w-full max-w-md mx-auto">
                      <CardHeader>
                        <CardTitle>Add Money</CardTitle>
                        <CardDescription>Choose your preferred payment method to add funds to your account.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 p-4">
                          <RadioGroup defaultValue="bank" className="grid grid-cols-2 gap-4">
                            <div>
                              <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                              <Label
                                htmlFor="bank"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <BanknoteIcon className="mb-3 h-6 w-6" />
                                Bank Transfer
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                              <Label
                                htmlFor="upi"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <WalletIcon className="mb-3 h-6 w-6" />
                                UPI
                              </Label>
                            </div>
                          </RadioGroup>
                          <div className="grid gap-2">
                            <Label htmlFor="amount">Amount</Label>
                            <Input id="amount" type="number" placeholder="Enter amount" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Add Money</Button>
                      </CardFooter>
                    </Card>
                  </DialogContent>
                </Dialog>
              </div>
            </DialogContent>
          </Dialog>
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