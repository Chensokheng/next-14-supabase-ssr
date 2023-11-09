import React from "react";
import CreateForm from "./create-form";
import { deleteTodoById, readTodo, updateTodoById } from "./actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function page() {
	const { data } = await readTodo();

	return (
		<div className="flex h-screen justify-center items-center">
			<div className="w-96 space-y-5">
				<CreateForm />
				{data?.map((todo, index) => {
					const deleteTodo = deleteTodoById.bind(null, todo.id);
					const updateTodo = updateTodoById.bind(
						null,
						todo.id,
						!todo.completed
					);
					return (
						<div key={index} className="flex items-center gap-6">
							<h1
								className={cn({
									"line-through": todo.completed,
								})}
							>
								{todo.title}
							</h1>

							<form action={deleteTodo}>
								<Button>delete</Button>
							</form>
							<form action={updateTodo}>
								<Button>Update</Button>
							</form>
						</div>
					);
				})}
			</div>
		</div>
	);
}
