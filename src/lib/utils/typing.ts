/* eslint-disable @typescript-eslint/no-explicit-any */
export function cast<T>(data: any): T {
	return data as any as T;
}
