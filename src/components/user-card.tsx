import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserCardProps {
  name: string;
  email: string;
}

export async function useGetCurrentUser(): Promise<any> {
  const URL = `http://localhost:3000/api/current-user`;

  const response = await fetch(`${URL}`);
  console.log({ response });
  const result = await response.json();
  console.log({ result });
  return result;
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Hello, {name}</CardTitle>
          <CardDescription>{email}</CardDescription>
        </CardHeader>
        <CardContent>Notifications</CardContent>
        <CardFooter>Settings</CardFooter>
      </Card>
    </>
  );
}
