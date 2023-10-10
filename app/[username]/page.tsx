"use client";

export default function Profile({ params }: { params: { username: number } }) {
  return (
    <div>
      <p>{params.username}</p>
    </div>
  );
}
