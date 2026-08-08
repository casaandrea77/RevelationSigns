# Domain redirects

## `revelationsigns.faith`

The `.faith` domain is registered and its DNS is hosted with Njalla.

Two permanent redirect records are configured:

| Type | Name | Destination | Status |
| --- | --- | --- | --- |
| Redirect (301) | `@` | `https://revelationsigns.one{path}` | Active |
| Redirect (301) | `www` | `https://revelationsigns.one{path}` | Active |

The `{path}` placeholder preserves the visitor's requested path. For example:

- `https://revelationsigns.faith/starfall` redirects to `https://revelationsigns.one/starfall`
- `https://www.revelationsigns.faith/great-controversy` redirects to `https://revelationsigns.one/great-controversy`

The canonical public website remains `https://revelationsigns.one`.
