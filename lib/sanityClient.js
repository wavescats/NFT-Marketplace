import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "8hxjy80j",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk6lC7gF0lrwDfale4GxswhDAljMsGa1lPvhtUsJEkMLRVmTb5sa24OM7RzVnwbvFONjy7HNb9En08IgQRLI0Mf2MdBxfJyXyTzd21mt1QPPsWyo6iXFKcZfy60jXbeceHjyD9zBKJI1Yqf0GrXa1L6OAbcShtFDiXkeDm2BixIBX7J5y6iD",
  useCdn: false,
});
