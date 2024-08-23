import Comments from "@/components/comments";
import FormComment from "@/components/form-comment";

export default function BlogDetailPage() {
  return (
    <div className='max-w-4xl mx-auto py-8 '>
      <h1 className='text-3xl font-bold'>Post 1</h1>
      <p>Written By: John Doe</p>
      <div className='mt-4 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam amet
        eaque, itaque voluptate placeat nobis. Atque necessitatibus voluptas
        nostrum.
      </div>

      <Comments />
      <FormComment />
    </div>
  );
}
