import { MyNotepadPage } from './app.po';

describe('my-notepad App', () => {
  let page: MyNotepadPage;

  beforeEach(() => {
    page = new MyNotepadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
