import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";

export function AuthForm() {
	return (
		<div className="space-y-5">
			<h1 className="text-center text-3xl font-bold">Auth-server</h1>
			<Tabs defaultValue="signin" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="signin">SignIn</TabsTrigger>
					<TabsTrigger value="register">Register</TabsTrigger>
				</TabsList>
				<TabsContent value="signin">
					<SignInForm />
				</TabsContent>
				<TabsContent value="register">
					<RegisterForm />
				</TabsContent>
			</Tabs>
		</div>
	);
}
