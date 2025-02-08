import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <Card className="w-full max-w-md mx-4 border border-border">
        <CardContent className="p-6 space-y-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">...Oups !</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            La page que vous cherchez n'existe pas ou a été déplacée. Veuillez
            vérifier l'URL ou retourner à la page d'accueil.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
