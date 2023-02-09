export type Version = string;

export enum ChangeCategory {
  Added = 'Added' /* For new features. */,
  Changed = 'Changed' /* For changes in existing functionality. */,
  Deprecated = 'Deprecated' /* For soon-to-be-removed features. */,
  Fixed = 'Fixed' /* For bug fixes. */,
  Removed = 'Removed' /* For removed features. */,
  Security = 'Security',
  Uncategorized = 'Uncategorized' /* For any changes that have yet to be categorized */,
}

/**
 * The header for the section of the changelog listing unreleased changes.
 */
export const unreleased = 'Unreleased';

/**
 * Change categories in the order in which they should be listed in the
 * changelog.
 */
export const orderedChangeCategories: ChangeCategory[] = [
  ChangeCategory.Uncategorized,
  ChangeCategory.Added,
  ChangeCategory.Changed,
  ChangeCategory.Deprecated,
  ChangeCategory.Removed,
  ChangeCategory.Fixed,
  ChangeCategory.Security,
];
