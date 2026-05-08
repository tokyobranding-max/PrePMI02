export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">サイトマップ</h1>
        <p className="text-gray-600 mb-8">PrePMI Intelligence のサイト構成一覧</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>マーケティングサイト</h2>
          <ul className="space-y-3 ml-4">
            <li><a href="/" className="text-blue-600 hover:underline font-medium">トップページ</a><p className="text-sm text-gray-600">プロダクト紹介・ブランドトップ</p></li>
            <li><a href="/features" className="text-blue-600 hover:underline font-medium">機能紹介</a><p className="text-sm text-gray-600">カルチャーフィット診断・PMOダッシュボード・AI PMIアシスタント</p></li>
            <li><a href="/pricing" className="text-blue-600 hover:underline font-medium">料金プラン</a><p className="text-sm text-gray-600">利用プランと価格体系</p></li>
            <li><a href="/apply" className="text-blue-600 hover:underline font-medium">β版申込</a><p className="text-sm text-gray-600">プレオープンアクセスの申し込み</p></li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>アプリケーション（ログイン後）</h2>
          <p className="text-sm text-gray-600 mb-4">※ 以下のページはログイン認証が必要です</p>
          <div className="ml-4 space-y-6">
            <div><h3 className="font-semibold text-gray-800 mb-2">📊 ダッシュボード</h3><ul className="space-y-2 ml-4 text-sm"><li><span className="text-gray-700">/dashboard</span><p className="text-gray-600">全案件の概要・統計情報</p></li></ul></div>
            <div><h3 className="font-semibold text-gray-800 mb-2">🎯 PMI案件管理</h3><ul className="space-y-2 ml-4 text-sm"><li><span className="text-gray-700">/cases/[id]</span><p className="text-gray-600">PMOダッシュボード（進捗・リスク・KPI）</p></li><li><span className="text-gray-700">/cases/[id]/fit</span><p className="text-gray-600">カルチャーフィット診断一覧・スコア可視化</p></li><li><span className="text-gray-700">/cases/[id]/gantt</span><p className="text-gray-600">PMI統合スケジュール（ガントチャート）</p></li></ul></div>
            <div><h3 className="font-semibold text-gray-800 mb-2">🔍 診断ツール</h3><ul className="space-y-2 ml-4 text-sm"><li><span className="text-gray-700">/diagnosis</span><p className="text-gray-600">カルチャーフィット・リスク診断</p></li></ul></div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center"><span className="inline-block w-2 h-2 bg-purple-600 rounded-full mr-2"></span>API エンドポイント</h2>
          <ul className="space-y-3 ml-4 text-sm">
            <li><span className="text-gray-700 font-mono">/api/apply</span><p className="text-gray-600">β版申込フォーム送信</p></li>
            <li><span className="text-gray-700 font-mono">/api/contact</span><p className="text-gray-600">お問い合わせメール送信</p></li>
            <li><span className="text-gray-700 font-mono">/api/ai-assistant</span><p className="text-gray-600">Claude API 連携（PMI助言）</p></li>
          </ul>
        </section>
        <section className="bg-gray-50 rounded-lg p-6 mt-12"><h3 className="font-semibold text-gray-800 mb-3">📋 情報</h3><ul className="space-y-2 text-sm text-gray-700"><li><strong>マーケティングページ:</strong> SEO対象・検索エンジン登録済み</li><li><strong>アプリケーション:</strong> 認証済みユーザーのみ（robots.txt で noindex）</li><li><strong>最終更新:</strong> 2026-05-01</li></ul></section>
      </div>
    </div>
  )
}
