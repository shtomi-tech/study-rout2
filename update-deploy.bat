@echo off
echo ========================================
echo 学習ロードマップ作成ツール - デプロイ更新
echo ========================================
echo.

echo 1. プロジェクトをビルドしています...
npm run build
if %errorlevel% neq 0 (
    echo エラー: ビルドに失敗しました。
    pause
    exit /b 1
)
echo ビルドが完了しました。
echo.

echo 2. 次の手順をFileZillaで実行してください:
echo    - リモートサイトの public_html フォルダに移動
echo    - 既存の index.html と assets フォルダを削除
echo    - ローカルの dist フォルダから新しいファイルをアップロード
echo.

echo 3. アップロード完了後、ブラウザで確認:
echo    http://xs115546.xsrv.jp
echo.

pause 