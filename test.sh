npm run prepublish;
cp -r dist/* ../vca-widget-navigation/node_modules/vca-widget-emoto/dist/;
cd ../vca-widget-navigation;
npm run build;
cp dist/* ../arise/node_modules/vca-widget-navigation/dist/;
cd ../arise;
npm run build;
bash release-docker.sh
