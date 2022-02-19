/**
 * Verifies if a Cart Changed stringfied message belong to the user with the specified ID.
 * @param message The message string
 * @param userId The user ID
 * @returns 
 */
export default function messageBelongsToUser(message: string, userId: string): boolean {
  return message.split(' ')[0] === userId
}