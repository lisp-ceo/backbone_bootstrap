rm -rf output
node r.js -o build.js
rel_src_dir=output
node r.js -o cssIn=../css/styles.css out=$rel_src_dir/css/styles.css

cp ../index.html $rel_src_dir/index.html
REQUIRE_VERSION='1.0.5'
SEDCMD='sed -i'
SEDCMD=$SEDCMD' s/js\/libs\/require\/require.js/http:\/\/requirejs.org\/docs\/release\/'$REQUIRE_VERSION'\/minified\/require.js/g output/index.html'
$SEDCMD
rm -f output/*.tmp
