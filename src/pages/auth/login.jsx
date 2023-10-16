/* eslint-disable no-undef */
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../..//components/ui/tabs";
import login from "../../services/auth";

export function Login() {
  async function onSubmit(event) {
    event.preventDefault();
    console.info(username.value, password.value);
    login(username.value, password.value);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">SignIn</TabsTrigger>
          <TabsTrigger value="signUp">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <form onSubmit={onSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Already have an account?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Log In</Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                New to our platform? Sign up for free.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username1">Username</Label>
                <Input id="username1" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password1">Password</Label>
                <Input id="password1" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>signUp</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
