import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Modal Component</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Standard Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Standard Dialog</CardTitle>
            <CardDescription>A basic dialog modal window</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Standard Dialog</DialogTitle>
                  <DialogDescription>
                    This is a basic dialog window that appears in the center of
                    the screen.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>
                    Dialog content goes here. You can add any content you want
                    to this area.
                  </p>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => {}}>
                    Cancel
                  </Button>
                  <Button type="button">Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Alert Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Dialog</CardTitle>
            <CardDescription>
              A dialog for important alerts and confirmations
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Show Alert</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Sheet (Slide-in Panel) */}
        <Card>
          <CardHeader>
            <CardTitle>Sheet</CardTitle>
            <CardDescription>
              A slide-in panel from the edge of the screen
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>
                    This is a sheet panel that slides in from the edge of the
                    screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p>
                    Sheet content goes here. This panel slides in from the side.
                  </p>
                </div>
                <SheetFooter>
                  <Button type="button">Save Changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        {/* Custom Sized Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Sized Dialog</CardTitle>
            <CardDescription>A dialog with custom dimensions</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Large Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Custom Sized Dialog</DialogTitle>
                  <DialogDescription>
                    This dialog has a custom width of 600px on larger screens.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>
                    You can customize the width and height of dialogs by adding
                    custom classes.
                  </p>
                </div>
                <DialogFooter>
                  <Button>Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Controlled Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Controlled Dialog</CardTitle>
            <CardDescription>
              A dialog with controlled open state
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <Button onClick={() => setIsOpen(true)} className="mb-2">
                Open Controlled Dialog
              </Button>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Controlled Dialog</DialogTitle>
                  <DialogDescription>
                    This dialog's open state is controlled programmatically.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>You can open and close this dialog programmatically.</p>
                </div>
                <DialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Sheet with Different Positions */}
        <Card>
          <CardHeader>
            <CardTitle>Sheet Positions</CardTitle>
            <CardDescription>
              Sheets can slide in from different sides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    Right
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Right Side Sheet</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <p>This sheet slides in from the right side.</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    Left
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left Side Sheet</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <p>This sheet slides in from the left side.</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    Top
                  </Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Top Sheet</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <p>This sheet slides in from the top.</p>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    Bottom
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Bottom Sheet</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <p>This sheet slides in from the bottom.</p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModalPage;
