export default function messageBelongsToUser(message: string, userId: string): boolean {
  return message.split(' ')[0] === userId
}