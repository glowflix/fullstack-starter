import { atomWithLocation } from "jotai-location";

/**
 * Location atom that syncs with window.location
 * Provides access to pathname, search params, and hash
 *
 * @example
 * ```tsx
 * const [location, setLocation] = useAtom(locationAtom);
 *
 * // Read current location
 * console.log(location.pathname);
 * console.log(location.searchParams?.get('query'));
 *
 * // Update location
 * setLocation((prev) => ({
 *   ...prev,
 *   pathname: '/new-path',
 *   searchParams: new URLSearchParams([['key', 'value']])
 * }));
 * ```
 */
export const locationAtom = atomWithLocation();

locationAtom.debugLabel = "location";
