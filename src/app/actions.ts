"use server";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleForm(prevState: any, formData: FormData) {
  //   console.log(prevState);
  console.log(formData);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ["wrong password", "password too short"],
  };
}
