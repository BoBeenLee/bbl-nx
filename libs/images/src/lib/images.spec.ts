import { setImagePrefixPath, getImages } from './images';

describe('images', () => {
  it('set prefix image path', () => {
    setImagePrefixPath('/test/test1');
    expect(getImages().iconImages.octocat).toBe(
      '/test/test1/assets/octocat.png'
    );
  });
});
