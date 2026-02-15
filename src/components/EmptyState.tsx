interface EmptyStateProps {
  message: string;
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="p-6 text-center border rounded-md bg-gray-50">
      <p className="text-gray-600">{message}</p>
    </div>
  );
}

export default EmptyState;
